export default function Loading() {
    return (
        <div className="w-full h-full rounded-lg overflow-hidden shadow-sm flex justify-center items-center">
            <div className="w-full h-full flex items-center justify-center p-10">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-green-500" />
            </div>
        </div>
    )
}