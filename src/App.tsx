import { useGetProdutosQuery } from './services/api'
import { useDispatch, useSelector } from 'react-redux'
import { adicionar as adicionarAoCarrinho } from './store/reducers/carrinho'
import { adicionar as favoritarProduto } from './store/reducers/favoritos'

import Header from './components/Header'
import Produtos from './containers/Produtos'

import { GlobalStyle } from './styles'
import { Produto } from './types'
import { RootReducer } from './store'

function App() {
  const dispatch = useDispatch()
  const favoritos = useSelector((state: RootReducer) => state.favoritos.itens)

  const { data: produtos, isLoading, error } = useGetProdutosQuery()

  function adicionarProdutoAoCarrinho(produto: Produto) {
    dispatch(adicionarAoCarrinho(produto))
  }

  function favoritar(produto: Produto) {
    dispatch(favoritarProduto(produto))
  }

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header />
        {isLoading && <p>Carregando produtos...</p>}
        {error && <p>Erro ao carregar os produtos.</p>}
        {produtos && (
          <Produtos
            produtos={produtos}
            favoritar={favoritar}
            adicionarAoCarrinho={adicionarProdutoAoCarrinho}
            favoritos={favoritos}
          />
        )}
      </div>
    </>
  )
}

export default App
