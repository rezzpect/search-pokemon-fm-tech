export default function DisplayError() {
    return (
        <div className="w-full h-full rounded-lg overflow-hidden shadow-sm flex justify-center items-center">
            <div className="w-full h-full flex items-center justify-center p-10">
                <p className="text-2xl font-bold text-green-500">Unexpected Error has occurred.</p>
            </div>
        </div>
    )
}