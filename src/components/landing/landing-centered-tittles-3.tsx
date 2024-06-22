


export default function LandingCenteredTitles3({ lang, titleValue, relativeTop, fontWeight}:{ lang: string, titleValue: string, relativeTop: string, fontWeight: string; }){

    return (
        <div className="w-full text-center px-6">
            <h3 className={`font-mono text-lg md:text-xl w-9/12 mx-auto relative ${relativeTop} ${fontWeight}`}>
                {titleValue}
            </h3>
        </div>
    );
}