import { Drawer } from 'antd';
import { CaretDown, List, NavigationArrow, X } from 'phosphor-react';
import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/Logo.png';
import { NavContext } from '../../context/NavContext';
import './Header.css';
import { SocialMedia } from './SocialMedia';

export const Header = () => {
  const [open, setOpen] = useState(false);
  const { openNav, ToogleOpen } = useContext(NavContext);

  const handleNavClick = () => {
    ToogleOpen();
  };
  const handleSubMenu = () => {
    setOpen(!open);
  };
  const handleOpen = () => {
    ToogleOpen();
  };
  const handleClose = () => {
    ToogleOpen();
  };

  return (
    <header className='bg-blue-primary px-10 py-2'>
      <div className='h-20 flex justify-between items-center'>
        <div className='h-full'>
          <img
            src={logo}
            alt='Logo Colegio Adventista Tupac Amaru'
            className='h-full'
          />
        </div>
        <div>
          <h1 className='flex flex-col text-white font-semibold text-center'>
            <span>Colegio Adventista</span>
            <span>Tupac Amaru</span>
          </h1>
        </div>
        {openNav ? null : (
          <button onClick={handleOpen}>
            <List
              size={48}
              color='#ffffff'
              weight='fill'
            />
          </button>
        )}
      </div>
      <Drawer
        title={
          <h1 className='flex flex-col font-semibold text-center font-texto text-xl'>
            <span>Colegio Adventista</span>
            <span>Tupac Amaru</span>
          </h1>
        }
        placement={'right'}
        closable={true}
        onClose={handleClose}
        open={openNav}
        extra={
          <img
            src={logo}
            className='h-16'
          />
        }
        closeIcon={
          <X
            size={44}
            color='#000000'
          />
        }
      >
        <nav className=''>
          <ul className='flex flex-col gap-2'>
            <li>
              <div className='nav-link'>
                <NavLink
                  to={'/'}
                  onClick={handleNavClick}
                >
                  Inicio
                </NavLink>
              </div>
            </li>
            <li>
              <div className='nav-link'>
                <NavLink
                  to={'/nosotros'}
                  onClick={handleNavClick}
                >
                  Propuesta Educativa
                </NavLink>
              </div>
            </li>
            <li>
              <div
                className='nav-link'
                onClick={handleSubMenu}
              >
                <NavLink className='flex gap-5 items-center justify-between'>
                  Nosotros
                  <CaretDown
                    size={16}
                    color='currentColor'
                    weight='fill'
                  />
                </NavLink>
              </div>
            </li>
            <li className={`${open ? 'block' : 'hidden'}`}>
              <ul className='px-10'>
                <li>
                  <div className='nav-sublink'>
                    <NavLink
                      to={'/nosotros'}
                      onClick={handleNavClick}
                    >
                      Mision Vision
                    </NavLink>
                  </div>
                </li>
                <li>
                  <div
                    className='nav-sublink'
                    onClick={handleNavClick}
                  >
                    <NavLink>Consejo Directivo</NavLink>
                  </div>
                </li>
                <li>
                  <div
                    className='nav-sublink'
                    onClick={handleNavClick}
                  >
                    <NavLink>Administracion CATA</NavLink>
                  </div>
                </li>
                <li>
                  <div className='nav-sublink'>
                    <NavLink>Reseña Historica</NavLink>
                  </div>
                </li>
                <li>
                  <div
                    className='nav-sublink'
                    onClick={handleNavClick}
                  >
                    <NavLink>Organigrama</NavLink>
                  </div>
                </li>
                <li>
                  <div
                    className='nav-sublink'
                    onClick={handleNavClick}
                  >
                    <NavLink>Procesos</NavLink>
                  </div>
                </li>
                <li>
                  <div
                    className='nav-sublink'
                    onClick={handleNavClick}
                  >
                    <NavLink>PLanificacion Anual</NavLink>
                  </div>
                </li>
              </ul>
            </li>
            <li>
              <div className='nav-link'>
                <NavLink onClick={handleNavClick}>Academia</NavLink>
              </div>
            </li>
            <li>
              <div className='nav-link'>
                <NavLink onClick={handleNavClick}>Matricula</NavLink>
              </div>
            </li>
            <li>
              <div className='nav-link'>
                <NavLink onClick={handleNavClick}>Logros</NavLink>
              </div>
            </li>
            <li>
              <div className='nav-link'>
                <NavLink onClick={handleNavClick}>Contacto</NavLink>
              </div>
            </li>
            <li className='mt-10'>
              <div className='flex justify-center'>
                <button className='nav-button'>
                  <NavigationArrow
                    size={24}
                    color='#ffffff'
                    weight='fill'
                    className='rotate-90'
                  />
                  B-Learning
                </button>
              </div>
            </li>
            <li className=' mt-10'>
              <div>
                <SocialMedia />
              </div>
            </li>
          </ul>
        </nav>
      </Drawer>
    </header>
  );
};
