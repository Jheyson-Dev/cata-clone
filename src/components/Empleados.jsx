export const Empleados = ({ employee = [] }) => {
  return (
    <div className='grid grid-cols-1 gap-10'>
      {employee.map(({ id, img, nombre, cargo }) => {
        return (
          <div
            className='flex flex-col gap-3 items-center'
            key={id}
          >
            <img
              src={img}
              alt=''
              className='w-56'
            />
            <div className='flex flex-col items-center gap-2'>
              <span className='font-semibold text-text-primary text-2xl'>
                {nombre}
              </span>
              <span className='text-text-primary  font-thin uppercase'>
                {cargo}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
