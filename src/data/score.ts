import type { MenuItem } from "@/data/menus";

export type ScoredItem = MenuItem & { __score: number };

export function tokenize(q: string): string[] {
  return q.toLowerCase().trim().split(/\s+/).filter(Boolean);
}

/**
 * Score in [0,1], title matches weighted higher than tags/badges.
 * - exact word match > substring
 * - all tokens considered; empty query returns 0
 */
export function scoreItem(item: MenuItem, tokens: string[]): number {
  if (!tokens.length) return 0;

  const title = item.title.toLowerCase();
  const tags = item.searchTags ?? [];
  const badges = item.badges ?? [];

  // weights sum to 1 (per-token best channel chosen)
  const W_TITLE = 0.65;
  const W_TAGS  = 0.25;
  const W_BADGE = 0.10;

  let sum = 0;
  for (const t of tokens) {
    // title scoring
    let titleScore = 0;
    if (title === t) titleScore = 1;
    else if (title.split(/\s+/).includes(t)) titleScore = 0.9;
    else if (title.includes(t)) titleScore = 0.65;

    // tags scoring
    let tagScore = 0;
    if (tags.includes(t)) tagScore = 0.85;
    else if (tags.some(x => x.includes(t))) tagScore = 0.6;

    // badges scoring
    let badgeScore = 0;
    if (badges.includes(t)) badgeScore = 0.7;
    else if (badges.some(x => x.includes(t))) badgeScore = 0.45;

    const tokenScore = Math.max(
      titleScore * W_TITLE,
      tagScore   * W_TAGS,
      badgeScore * W_BADGE
    );
    sum += tokenScore;
  }

  // normalize by token count then squash to [0,1]
  const avg = sum / tokens.length;
  return Math.max(0, Math.min(1, avg));
}

/** Section-local filter + order by score desc. */
export function scoreFilterSort(items: readonly MenuItem[], q: string): ScoredItem[] {
  const tokens = tokenize(q);
  const withScores = items.map(i => ({ ...i, __score: scoreItem(i, tokens) }));
  return withScores
    .filter(i => tokens.length ? i.__score > 0 : true)
    .sort((a, b) => b.__score - a.__score || Number(b.popular) - Number(a.popular));
}

/** Highest scored item overall. */
export function bestHit(all: readonly MenuItem[], q: string): ScoredItem | null {
  const tokens = tokenize(q);
  if (!tokens.length) return null;
  let best: ScoredItem | null = null;
  for (const it of all) {
    const s = scoreItem(it, tokens);
    if (!best || s > best.__score) best = { ...it, __score: s };
  }
  return best;
}
