
jest.mock('@supabase/supabase-js', () => ({
  createClient: jest.fn(() => ({
    from: jest.fn().mockReturnThis(),
    select: jest.fn().mockResolvedValue({ data: [], error: null }),
    eq: jest.fn().mockReturnThis(),
    insert: jest.fn().mockResolvedValue({ error: null }),
  })),
}));
const { getClicksForUrls, getClicksForUrl, storeClicks } = require('../src/db/supabase');


// Mock Supabase client
jest.mock('@supabase/supabase-js', () => ({
  createClient: jest.fn(() => ({
    from: jest.fn(() => ({
      select: jest.fn().mockResolvedValue({ data: [], error: null }),
      eq: jest.fn().mockResolvedValue({ data: [], error: null }),
      insert: jest.fn().mockResolvedValue({ data: [], error: null }),
      in: jest.fn().mockResolvedValue({ data: [], error: null }),
    })),
  })),
}));

describe('Supabase Functions', () => {
  test('getClicksForUrls should return data', async () => {
    const result = await getClicksForUrls([1, 2, 3]);
    expect(result).toEqual([]);
  });

  test('getClicksForUrl should return data', async () => {
    const result = await getClicksForUrl(1);
    expect(result).toEqual([]);
  });

  test('storeClicks should perform redirection', async () => {
    delete window.location;
    window.location = { href: '' };

    const mockData = { id: 1, originalUrl: 'https://example.com' };
    await storeClicks(mockData);

    expect(window.location.href).toBe(mockData.originalUrl);
  });
});
