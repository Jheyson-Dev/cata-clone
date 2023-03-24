import { createBrowserRouter } from 'react-router-dom';
import { Administracion } from '../components/pages/Administracion';
import { ConsejoDirectivo } from '../components/pages/ConsejoDirectivo';
import { HomePage } from '../components/pages/HomePage';
import { NosotrosPage } from '../components/pages/NosotrosPage';
import { PublicTemplate } from '../components/templates/PublicTemplate';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicTemplate />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/nosotros',
        element: <NosotrosPage />,
      },
      {
        path: '/consejo_directivo',
        element: <ConsejoDirectivo />,
      },
      {
        path: '/administracion',
        element: <Administracion />,
      },
      {
        path: '/resenia_historica',
      },
      {
        path: '/organigrama',
      },
      {
        path: '/academia',
      },
      {
        path: '/matricula',
      },
      {
        path: '/logros',
      },
      {
        path: '/contacto',
      },
    ],
  },
]);
