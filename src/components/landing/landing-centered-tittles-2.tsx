


export default function LandingCenteredTitles2({ lang, titleValue}:{ lang: string, titleValue: string; }){

    return (
        <div className="w-full text-center px-6">
            <h2 className="font-mono font-bold text-3xl md:text-4xl">
                {titleValue}
            </h2>
        </div>
    );
}