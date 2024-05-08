import { roundNumApprox } from '@/utils/numerial';
import { twMerge } from 'tailwind-merge';

export default function OTPStats({
  data,
  className,
}: {
  data: { request: number; confirm: number };
  className?: string;
}) {
  const { request, confirm } = data;
  return (
    <section
      className={twMerge('grid w-full px-3 py-3 md:grid-cols-2', className)}
    >
      <div className="my-3 text-center text-xl font-semibold md:text-2xl">
        {roundNumApprox(request)} Request{request > 1 ? 's' : ''}
      </div>
      <div className="my-3 text-center text-xl font-semibold md:text-2xl">
        {roundNumApprox(confirm)} Confirmation{confirm > 1 ? 's' : ''}
      </div>
    </section>
  );
}
