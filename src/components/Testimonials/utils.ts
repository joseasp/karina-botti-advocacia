// Fisher-Yates shuffle parcial para criar efeito visual desordenado
export const shuffleCards = <T extends { id: number }>(cards: T[], seed?: number): T[] => {
  const shuffled = [...cards];
  const limit = Math.floor(shuffled.length * 0.6); // Embaralha 60% dos cards
  
  for (let i = 0; i < limit; i++) {
    const j = Math.floor(Math.random() * shuffled.length);
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  return shuffled;
};

// Filtra cards excluindo IDs específicos e seus adjacentes
export const filterExcluding = <T extends { id: number }>(
  allCards: T[],
  excludeIds: number[]
): T[] => {
  const excludeSet = new Set([
    ...excludeIds,
    // Adiciona adjacentes: se excludeIds tem [5,6,7], excluir [4,5,6,7,8]
    ...excludeIds.flatMap(id => [id - 1, id, id + 1])
  ]);
  
  return allCards.filter(card => !excludeSet.has(card.id));
};
