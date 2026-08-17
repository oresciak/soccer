window.gameDatabase = window.gameDatabase || {};
window.gameDatabase.leagues = [
  {
    id: 'poland-1',
    countryId: 'poland',
    name: 'Polish Premier League',
    shortName: 'PL1',
    level: 1,
    prestige: 76,
    clubCount: 12,
    promotionSlots: 2,
    relegationSlots: 2,
    domesticCups: 2,
    tvRevenue: 64,
    competition: 'Top division',
    promotionRule: 'Top two clubs gain promotion placeholder rules.',
    relegationRule: 'Bottom two clubs are relegated using placeholder model.',
    notes: 'Top domestic division in Poland.'
  },
  {
    id: 'poland-2',
    countryId: 'poland',
    name: 'Polish First League',
    shortName: 'PL2',
    level: 2,
    prestige: 52,
    clubCount: 12,
    promotionSlots: 2,
    relegationSlots: 2,
    domesticCups: 1,
    tvRevenue: 35,
    competition: 'Second division',
    promotionRule: 'Promotion to the top division via table and playoff placeholder.',
    relegationRule: 'Bottom clubs drop to lower national level placeholder.',
    notes: 'Second league in Poland; placeholder system for promotions and relegations.'
  },
  {
    id: 'england-1',
    countryId: 'england',
    name: 'Premier League',
    shortName: 'EPL',
    level: 1,
    prestige: 96,
    clubCount: 12,
    promotionSlots: 0,
    relegationSlots: 2,
    domesticCups: 3,
    tvRevenue: 99,
    competition: 'Top division',
    promotionRule: 'No direct promotion placeholder in this prototype.',
    relegationRule: 'Bottom two clubs are relegated using placeholder rules.',
    notes: 'High-prestige English top division placeholder structure.'
  }
];
