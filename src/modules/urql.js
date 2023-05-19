import urql, { cacheExchange, fetchExchange } from '@urql/vue'

export const install = ({ isClient, app }) => {
  // if (!isClient) return

  app.use(urql, {
    url: 'https://api.github.com/graphql',
    exchanges: [cacheExchange, fetchExchange],
    fetchOptions: () => {
      const token = import.meta.env.VITE_GITHUB_TOKEN
      return {
        headers: { authorization: token ? `Bearer ${token}` : '' },
      }
    },
  })
}
