import { Banner } from '../sections/Banner';
import directorGeneral from '../../assets/img/nosotros/administracion/Director_General.png';
import administrador from '../../assets/img/nosotros/administracion/Administrador.png';
import tesorera from '../../assets/img/nosotros/administracion/Tesoreria.png';
import capellania from '../../assets/img/nosotros/administracion/Capellania.png';
import dirAcaSecu from '../../assets/img/nosotros/administracion/Director_Aca_Secundaria.png';
import dirAcaPrim from '../../assets/img/nosotros/administracion/Director_Aca_Primaria.png';
import coorSedeJerusalen from '../../assets/img/nosotros/administracion/Coor_Aca_Sede_Jerusalen.png';
import tic from '../../assets/img/nosotros/administracion/TIC.png';
import logistica from '../../assets/img/nosotros/administracion/Logistica.png';
import secretaria from '../../assets/img/nosotros/administracion/Secretaria.png';
import gestionCalidad from '../../assets/img/nosotros/administracion/Director_Gest_Calidad.png';
import asistenteOperaciones from '../../assets/img/nosotros/administracion/asistente_operaciones.png';

import { Empleados } from '../Empleados';
import { useState } from 'react';

export const Administracion = () => {
  const [administradors, setAdministradors] = useState([
    {
      id: 1,
      img: directorGeneral,
      nombre: 'Wilfredo Coaquira Coaquira',
      cargo: 'DIRECTOR GENERAL',
    },
    {
      id: 2,
      img: administrador,
      nombre: 'Dino Apaza Sosa',
      cargo: 'ADMINISTRADOR',
    },
    {
      id: 3,
      img: tesorera,
      nombre: 'Karen Alca Apaza',
      cargo: 'TESORERA',
    },
    {
      id: 4,
      img: capellania,
      nombre: 'José Cotrina Alvarado',
      cargo: 'CAPELLANÍA',
    },
    {
      id: 5,
      img: dirAcaSecu,
      nombre: 'Vicktor Chura Luque',
      cargo: 'DIRECTOR ACADÉMICO SECUNDARIA',
    },
    {
      id: 6,
      img: dirAcaPrim,
      nombre: 'Martha Pilco Tamayo',
      cargo: 'DIRECTOR ACADÉMICO PRIMARIA',
    },
    {
      id: 7,
      img: coorSedeJerusalen,
      nombre: 'Sandra Quispe Quispe',
      cargo: 'COORD. ACADÉMICO SEDE JERUSALÉN',
    },
    {
      id: 8,
      img: tic,
      nombre: 'Ismael Incahuanaco Mamani',
      cargo: 'TIC',
    },
    {
      id: 9,
      img: logistica,
      nombre: 'David Condori Quispe',
      cargo: 'LOGÍSTICA',
    },
    {
      id: 10,
      img: secretaria,
      nombre: 'Fanny Mamani Flores',
      cargo: 'SECRETARIA GENERAL',
    },
    {
      id: 11,
      img: gestionCalidad,
      nombre: 'Mamani Mamani Guillermo',
      cargo: 'DIRECTOR DE GESTIÓN DE CALIDAD',
    },
    {
      id: 12,
      img: asistenteOperaciones,
      nombre: 'Yaritza Casildo Chanducas',
      cargo: 'ASISTENTE DE OPERACIONES',
    },
  ]);
  return (
    <div>
      <Banner text={'Administracion'} />
      <div className='px-10 py-20 lg:container lg:mx-auto'>
        <Empleados employee={administradors} />
      </div>
    </div>
  );
};
