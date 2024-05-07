import { ICheckBox } from '../types/interface';

export default function CheckBox({ name, required = false }: ICheckBox) {
  const identifier = `${name}ID`;

  return (
    <>
      <input
        className="rounded-sm border-2 border-slate-200 shadow-none checked:border-[#1ca7ec] invalid:border-red-600 invalid:bg-red-100 focus-within:border-[#88d6fd] focus:border-[#88d6fd] focus:shadow-none focus:outline-none active:border-[#88d6fd]"
        type="checkbox"
        name={name}
        id={identifier}
        required={required}
      />
    </>
  );
}
