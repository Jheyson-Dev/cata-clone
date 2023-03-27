import { createBrowserRouter } from 'react-router-dom';
import { Administracion } from '../components/pages/Administracion';
import { ConsejoDirectivo } from '../components/pages/ConsejoDirectivo';
import { HomePage } from '../components/pages/HomePage';
import { NosotrosPage } from '../components/pages/NosotrosPage';
import { PropuestaEducativa } from '../components/pages/PropuestaEducativa';
import { ReseniaHistorica } from '../components/pages/ReseniaHistorica';
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
        element: <ReseniaHistorica />,
      },
      {
        path: '/organigrama',
      },
      {
        path: '/propuesta_educativa',
        element: <PropuestaEducativa />,
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
