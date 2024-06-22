


export default function LandingCenteredTitles3({ lang, titleValue, relativeTop}:{ lang: string, titleValue: string, relativeTop: string; }){

    return (
        <div className="w-full text-center">
            <h3 className={`font-mono text-xl w-9/12 mx-auto relative ${relativeTop}`}>
                {titleValue}
            </h3>
        </div>
    );
}