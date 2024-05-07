import { KeyBox } from '@/components/forms';
import { IKeyContainer } from '@/components/types/interface';

export default function KeyContainer({
  title,
  actionKey,
  type = 'public',
  name,
  inputClass,
}: IKeyContainer) {
  return (
    <section className="flex w-full flex-wrap items-center border border-t-0 border-zinc-200 bg-zinc-50 p-3 md:flex-nowrap">
      <h4 className="w-full pe-5 text-lg font-semibold capitalize md:w-fit">
        {title}:{' '}
      </h4>
      <KeyBox
        className={inputClass}
        type={type}
        value={actionKey}
        name={name}
      />
    </section>
  );
}
