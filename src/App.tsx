import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { carregarProdutos } from './store/reducers/produtos'
import { adicionar as adicionarAoCarrinho } from './store/reducers/carrinho'
import { adicionar as favoritarProduto } from './store/reducers/favoritos'

import Header from './components/Header'
import Produtos from './containers/Produtos'

import { GlobalStyle } from './styles'
import { RootReducer } from './store'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const dispatch = useDispatch()

  // Pegando produtos do Redux
  const produtos = useSelector((state: RootReducer) => state.produtos.itens)

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/ebac_sports')
      .then((res) => res.json())
      .then((res) => dispatch(carregarProdutos(res)))
  }, [dispatch])

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
        <Produtos
          produtos={produtos}
          favoritar={favoritar}
          adicionarAoCarrinho={adicionarProdutoAoCarrinho}
          favoritos={[]}
        />
      </div>
    </>
  )
}

export default App
