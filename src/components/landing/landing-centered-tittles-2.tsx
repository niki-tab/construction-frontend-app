


export default function LandingCenteredTitles2({ lang, titleValue}:{ lang: string, titleValue: string; }){

    return (
        <div className="w-full text-center">
            <h2 className="font-mono font-bold text-5xl">
                {titleValue}
            </h2>
        </div>
    );
}