import { Route, Routes as BaseRoutes } from 'react-router-dom';
import Todos from './components/Todos';

export default function Routes() {
  return (
    <BaseRoutes>
      <Route path="/todos" element={<Todos />} />
      <Route path="products">
      </Route>
    </BaseRoutes>
  )
}
