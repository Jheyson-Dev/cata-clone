export const Empleados = ({ employee = [] }) => {
  return (
    <div className='grid sm:grid-cols-3 gap-10 lg:grid-cols-4'>
      {employee.map(({ id, img, nombre, cargo }) => {
        return (
          <div
            className='flex flex-col gap-3 items-center'
            key={id}
          >
            <img
              src={img}
              alt=''
              className='w-56 hover:scale-110 transition-transform lg:w-36'
            />
            <div className='flex flex-col items-center gap-2'>
              <span className='font-semibold text-text-primary text-2xl text-center'>
                {nombre}
              </span>
              <span className='text-text-primary font-thin uppercase text-center'>
                {cargo}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
