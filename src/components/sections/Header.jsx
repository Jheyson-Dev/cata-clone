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
  const [lgOpen, setLgOpen] = useState(false);
  const handleMenuLg = () => {
    setLgOpen(!lgOpen);
  };

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
      <div className='h-20 lg:container lg:mx-auto hidden lg:block'>
        <div className='h-full flex items-center justify-between'>
          <img
            src={logo}
            alt='Logo Colegio Adventista Tupac Amaru'
            className='h-full'
          />
          <nav className=''>
            <ul className='flex gap-5 items-center'>
              <li>
                <div className='nav-link'>
                  <NavLink to={'/'}>Inicio</NavLink>
                </div>
              </li>
              <li>
                <div className='nav-link relative'>
                  <div
                    className='flex items-center gap-1 nosotros cursor-pointer'
                    onClick={handleMenuLg}
                  >
                    Nosotros
                    <CaretDown
                      size={14}
                      weight='bold'
                    />
                  </div>
                  <ul
                    className={`absolute top-12 rounded-lg bg-white  text-blue-primary ${
                      lgOpen ? 'block' : 'hidden'
                    }`}
                  >
                    <li>
                      <div
                        className='nav-sublinkLg'
                        onClick={handleMenuLg}
                      >
                        <NavLink to={'/nosotros'}>Mision Vision</NavLink>
                      </div>
                    </li>
                    <li>
                      <div
                        className='nav-sublinkLg'
                        onClick={handleMenuLg}
                      >
                        <NavLink to={'/consejo_directivo'}>
                          Consejo Directivo
                        </NavLink>
                      </div>
                    </li>
                    <li>
                      <div
                        className='nav-sublinkLg'
                        onClick={handleMenuLg}
                      >
                        <NavLink to={'/administracion'}>
                          Administracion CATA
                        </NavLink>
                      </div>
                    </li>
                    <li>
                      <div
                        className='nav-sublinkLg'
                        onClick={handleMenuLg}
                      >
                        <NavLink to={'/resenia_historica'}>
                          Reseña Historica
                        </NavLink>
                      </div>
                    </li>
                    <li>
                      <div
                        className='nav-sublinkLg'
                        onClick={handleMenuLg}
                      >
                        <NavLink
                          to={
                            'https://www.canva.com/design/DAFYgHOKw3I/9i-ipR0e5F1BaKCFP46fUA/view?utm_content=DAFYgHOKw3I&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'
                          }
                          target='_blank'
                        >
                          Organigrama
                        </NavLink>
                      </div>
                    </li>
                    <li>
                      <div
                        className='nav-sublinkLg'
                        onClick={handleMenuLg}
                      >
                        <NavLink
                          to={
                            'https://www.canva.com/design/DAFYJWqe40k/2_ux35I_XqoMXonpg7PI-Q/view'
                          }
                          target='_blank'
                        >
                          Procesos
                        </NavLink>
                      </div>
                    </li>
                    <li>
                      <div
                        className='nav-sublinkLg'
                        onClick={handleMenuLg}
                      >
                        <NavLink
                          to={
                            'https://www.canva.com/design/DAFb5zNIqvE/lygkFYV6IACi6kA7p_4D4w/view'
                          }
                          target='_blank'
                        >
                          PLanificacion Anual
                        </NavLink>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <div className='nav-link'>
                  <NavLink to={'/propuesta_educativa'}>
                    Propuesta Educativa
                  </NavLink>
                </div>
              </li>
              <li>
                <div className='nav-link'>
                  <NavLink to={'/academia'}>Academia</NavLink>
                </div>
              </li>
              <li>
                <div className='nav-link'>
                  <NavLink to={'/matricula'}>Matricula</NavLink>
                </div>
              </li>
              <li>
                <div className='nav-link'>
                  <NavLink to={'/logros'}>Logros</NavLink>
                </div>
              </li>
              <li>
                <div className='nav-link'>
                  <NavLink to={'/contacto'}>Contacto</NavLink>
                </div>
              </li>
              <li>
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
            </ul>
          </nav>
        </div>
      </div>
      <div className='h-20 flex justify-between items-center lg:hidden'>
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
      {openNav && (
        <Drawer
          title={
            <h1 className='flex flex-col font-semibold text-center font-texto text-xl'>
              <span>Colegio Adventista</span>
              <span>Tupac Amaru</span>
            </h1>
          }
          placement={'right'}
          className='lg:hidden'
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
                      <NavLink to={'/consejo_directivo'}>
                        Consejo Directivo
                      </NavLink>
                    </div>
                  </li>
                  <li>
                    <div
                      className='nav-sublink'
                      onClick={handleNavClick}
                    >
                      <NavLink to={'/administracion'}>
                        Administracion CATA
                      </NavLink>
                    </div>
                  </li>
                  <li>
                    <div
                      className='nav-sublink'
                      onClick={handleNavClick}
                    >
                      <NavLink to={'/resenia_historica'}>
                        Reseña Historica
                      </NavLink>
                    </div>
                  </li>
                  <li>
                    <div
                      className='nav-sublink'
                      onClick={handleNavClick}
                    >
                      <NavLink
                        to={
                          'https://www.canva.com/design/DAFYgHOKw3I/9i-ipR0e5F1BaKCFP46fUA/view?utm_content=DAFYgHOKw3I&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'
                        }
                        target='_blank'
                      >
                        Organigrama
                      </NavLink>
                    </div>
                  </li>
                  <li>
                    <div
                      className='nav-sublink'
                      onClick={handleNavClick}
                    >
                      <NavLink
                        to={
                          'https://www.canva.com/design/DAFYJWqe40k/2_ux35I_XqoMXonpg7PI-Q/view'
                        }
                        target='_blank'
                      >
                        Procesos
                      </NavLink>
                    </div>
                  </li>
                  <li>
                    <div
                      className='nav-sublink'
                      onClick={handleNavClick}
                    >
                      <NavLink
                        to={
                          'https://www.canva.com/design/DAFb5zNIqvE/lygkFYV6IACi6kA7p_4D4w/view'
                        }
                        target='_blank'
                      >
                        PLanificacion Anual
                      </NavLink>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <div className='nav-link'>
                  <NavLink
                    to={'/propuesta_educativa'}
                    onClick={handleNavClick}
                  >
                    Propuesta Educativa
                  </NavLink>
                </div>
              </li>
              <li>
                <div className='nav-link'>
                  <NavLink
                    to={'/academia'}
                    onClick={handleNavClick}
                  >
                    Academia
                  </NavLink>
                </div>
              </li>
              <li>
                <div className='nav-link'>
                  <NavLink
                    to={'/matricula'}
                    onClick={handleNavClick}
                  >
                    Matricula
                  </NavLink>
                </div>
              </li>
              <li>
                <div className='nav-link'>
                  <NavLink
                    to={'/logros'}
                    onClick={handleNavClick}
                  >
                    Logros
                  </NavLink>
                </div>
              </li>
              <li>
                <div className='nav-link'>
                  <NavLink
                    to={'/contacto'}
                    onClick={handleNavClick}
                  >
                    Contacto
                  </NavLink>
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
      )}
    </header>
  );
};
