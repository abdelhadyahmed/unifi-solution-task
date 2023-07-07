import { Route, Routes as BaseRoutes } from 'react-router-dom';
import Todos from './components/Todos';
import Weather from './components/Weather';

export default function Routes() {
  return (
    <BaseRoutes>
      <Route path="/todos" element={<Todos />} />
      <Route path="/weather" element={<Weather />} />
    </BaseRoutes>
  )
}
