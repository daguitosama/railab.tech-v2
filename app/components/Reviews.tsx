import { useLangContext } from "~/lang/lang";

interface Review {
    id: string;
    author: string;
    content: string;
    authorAvatarColor: string;
}

const Reviews: Review[] = [
    {
        id: "r1",
        authorAvatarColor: "#DF742D",
        author: "David Lobaina",
        content: "super recomendable, buen trato, cordialidad, buen manejo de tu equipo, buen equipo de trabajo.",
    },
    {
        id: "r2",
        authorAvatarColor: "#1E4C41",
        author: "antonieta bobes",
        content:
            "Excelente servicio. muy profesional, se ve que conocen a fondo el trabajo que hacen enseguida supo lo que tenia la computadora. quede encantada lo recomiendo 100%",
    },
    {
        id: "r2",
        authorAvatarColor: "#4C2FA2",
        author: "Noslen Vargas",
        content:
            "Muy buena experiencia, rapidez y profesionalismo, dieron soluciones a mis problemas. Un equipo bien complementado al cual volvere acudir cuando sea necesario 💪🏻👍🏻👍🏻👍🏻👍🏻",
    },
];

export function ReviewsSection() {
    const lang = useLangContext();
    const title = lang == "es" ? "Vea que opinan nuestros clientes" : "See what our customers say";

    return (
        <section className='grid gap-10'>
            <h2 className='text-center font-black text-3xl md:text-5xl'>{title}</h2>
            <div className='grid gap-6 lg:grid-cols-3'>
                {Reviews.map((review) => {
                    return (
                        <ReviewCard
                            review={review}
                            key={review.id}
                        />
                    );
                })}
            </div>
        </section>
    );
}

function ReviewCard({ review }: { review: Review }) {
    return (
        <div className='bg-zinc-100 border-slate-100/20 w-full h-full rounded-xl p-4 flex flex-col gap-4'>
            {/* avatar - name */}
            <div className='flex items-center justify-start gap-4'>
                <div
                    className='w-10 h-10 rounded-full flex items-center justify-center'
                    style={{ backgroundColor: review.authorAvatarColor }}
                >
                    <span className='text-lg font-medium text-white'>{review.author[0].toUpperCase()}</span>
                </div>

                <p className='font-medium text-lg'>{review.author}</p>
            </div>

            <Starts />
            {/* content  */}
            <p className='text-lg'>{review.content}</p>
        </div>
    );
}

function Starts() {
    return (
        <div
            className='flex items-start justify-start h-[20px] '
            role='img'
            aria-label='Rated 5.0 out of 5'
        >
            {[1, 2, 3, 4, 5].map((idx) => (
                <svg
                    key={`start-${idx}`}
                    focusable='false'
                    width='18'
                    height='18'
                    viewBox='0 0 12 12'
                    className='ePMStd NMm5M'
                >
                    <path
                        d='M6 .6L2.6 11.1 11.4 4.7H.6L9.4 11.1Z'
                        fill='#fabb05'
                        stroke='#fabb05'
                        strokeLinejoin='round'
                        strokeWidth='1'
                    ></path>
                </svg>
            ))}
        </div>
    );
}
