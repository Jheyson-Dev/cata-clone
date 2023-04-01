import contact from '../../assets/img/Contact.png';

export const Contacto = () => {
  return (
    <div className='p-10 lg:container lg:mx-auto'>
      <div className='grid sm:grid-cols-2 gap-20 sm:gap-0 '>
        <div className='grid gap-5  rounded-lg shadow-xl py-10 px-5'>
          <h2 className='text-4xl font-semibold text-center text-yellow-primary'>
            Contactanos
          </h2>
          <form className='grid grid-cols-1 gap-2'>
            <div className='flex flex-col gap-2'>
              <label
                htmlFor='nombres'
                className='label-contact'
              >
                Nombres
              </label>
              <input
                type='text'
                name='nombres'
                id='nombres'
                className='input-contact'
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label
                htmlFor='apellidos'
                className='label-contact'
              >
                Apellidos
              </label>
              <input
                type='text'
                name='apellidos'
                id='apellidos'
                className='input-contact'
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label
                htmlFor='dni'
                className='label-contact'
              >
                DNI
              </label>
              <input
                type='text'
                name='dni'
                id='dni'
                className='input-contact'
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label
                htmlFor='celular'
                className='label-contact'
              >
                N° Celular
              </label>
              <input
                type='tel'
                name='celular'
                id='celular'
                className='input-contact'
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label
                htmlFor='nombres'
                className='label-contact'
              >
                Correo Electronico
              </label>
              <input
                type='text'
                name='nombres'
                id='nombres'
                className='input-contact'
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label
                htmlFor='grados'
                className='label-contact'
              >
                Grados de interés
              </label>
              <select
                name='grados'
                id='grados'
                className='input-contact'
              >
                <option defaultChecked>Seleccione</option>
                <option value='1_secundaria'>Secundaria</option>
                <option value='2_secundaria'>Secundaria</option>
                <option value='3_secundaria'>Secundaria</option>
                <option value='4_secundaria'>Secundaria</option>
                <option value='5_secundaria'>Secundaria</option>
              </select>
            </div>
            <div className='flex flex-col gap-2'>
              <label
                htmlFor='email'
                className='label-contact'
              >
                Email
              </label>
              <input
                type='email'
                name='email'
                id='email'
                className='input-contact'
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label
                htmlFor='modalidad'
                className='label-contact'
              >
                Modalidad de interés
              </label>
              <select
                name='modalidad'
                id='modalidad'
                className='input-contact'
              >
                <option>Seleccione</option>
                <option value='virtual'>Virtual</option>
                <option value='presencial'>Presencial</option>
              </select>
            </div>
            <div className='flex justify-center mt-5'>
              <button className='bg-button-primary px-6 py-1 rounded-md text-white font-semibold text-xl'>
                Enviar
              </button>
            </div>
          </form>
        </div>
        <div className='flex justify-center'>
          <img
            src={contact}
            alt=''
            className='w-2/3 object-contain sm:w-full'
          />
        </div>
      </div>
    </div>
  );
};
