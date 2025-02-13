import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../types'

type ProdutosState = {
  itens: Produto[]
}

const initialState: ProdutosState = {
  itens: []
}

const produtosSlice = createSlice({
  name: 'produtos',
  initialState,
  reducers: {
    carregarProdutos: (state, action: PayloadAction<Produto[]>) => {
      state.itens = action.payload
    }
  }
})

export const { carregarProdutos } = produtosSlice.actions
export default produtosSlice.reducer
