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
      <div className="text-center text-xl md:text-2xl font-semibold my-3">
        {roundNumApprox(request)} Request{request > 1 ? 's' : ''}
      </div>
      <div className="text-center text-xl md:text-2xl font-semibold my-3">
        {roundNumApprox(confirm)} Confirmation{confirm > 1 ? 's' : ''}
      </div>
    </section>
  );
}
