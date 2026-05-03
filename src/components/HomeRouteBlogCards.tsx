import { bricolage_grotesque } from '@/utils/fonts';
import { Link } from '@radix-ui/themes';

type Blog = {
    id?: string,
    title: string,
    content?: unknown,
    image_public_id?: string,
    author?: string
    createdAt?: string
}

export default function HomeRouteBlogCards({ title, id, createdAt, image_public_id }: Blog) {
    const isExternal = image_public_id?.startsWith('http');
    const href = isExternal ? image_public_id! : `/blogs/${id}`;

    return (
        <section className={`flex flex-col justify-start items-start w-full my-3 ${bricolage_grotesque}`}>
            <Link href={href} underline='none' target={isExternal ? '_blank' : undefined} rel={isExternal ? 'noopener noreferrer' : undefined}>
                <h2 className={`text-start text-lg font-medium text-black dark:text-white`}>{title}</h2>
                <p className='text-xs text-black/60 dark:text-white/60 mt-1'>
                    {new Date(createdAt || '').toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}
                </p>
            </Link>
        </section>
    )
}