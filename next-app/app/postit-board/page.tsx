'use client'

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/83tAGns9Qv1
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"

export default function Component() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            <div className="bg-yellow-100 rounded-md shadow-md p-4 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">Grocery List</h3>
                    <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" className="hover:bg-yellow-200">
                            <FilePenIcon className="w-4 h-4" />
                            <span className="sr-only">Edit</span>
                        </Button>
                        <Button variant="ghost" size="icon" className="hover:bg-yellow-200">
                            <TrashIcon className="w-4 h-4" />
                            <span className="sr-only">Delete</span>
                        </Button>
                    </div>
                </div>
                <p className="text-sm text-muted-foreground">
                    - Milk
                    <br />- Eggs
                    <br />- Bread
                    <br />- Apples
                </p>
            </div>
            <div className="bg-green-100 rounded-md shadow-md p-4 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">Meeting Notes</h3>
                    <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" className="hover:bg-green-200">
                            <FilePenIcon className="w-4 h-4" />
                            <span className="sr-only">Edit</span>
                        </Button>
                        <Button variant="ghost" size="icon" className="hover:bg-green-200">
                            <TrashIcon className="w-4 h-4" />
                            <span className="sr-only">Delete</span>
                        </Button>
                    </div>
                </div>
                <p className="text-sm text-muted-foreground">
                    - Discuss new product roadmap
                    <br />- Review Q4 sales numbers
                    <br />- Assign tasks for next sprint
                </p>
            </div>
            <div className="bg-blue-100 rounded-md shadow-md p-4 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">Todo List</h3>
                    <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" className="hover:bg-blue-200">
                            <FilePenIcon className="w-4 h-4" />
                            <span className="sr-only">Edit</span>
                        </Button>
                        <Button variant="ghost" size="icon" className="hover:bg-blue-200">
                            <TrashIcon className="w-4 h-4" />
                            <span className="sr-only">Delete</span>
                        </Button>
                    </div>
                </div>
                <p className="text-sm text-muted-foreground">
                    - Finish report
                    <br />- Call client
                    <br />- Schedule team meeting
                    <br />- Buy birthday gift
                </p>
            </div>
            <div className="bg-pink-100 rounded-md shadow-md p-4 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">Brainstorm Ideas</h3>
                    <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" className="hover:bg-pink-200">
                            <FilePenIcon className="w-4 h-4" />
                            <span className="sr-only">Edit</span>
                        </Button>
                        <Button variant="ghost" size="icon" className="hover:bg-pink-200">
                            <TrashIcon className="w-4 h-4" />
                            <span className="sr-only">Delete</span>
                        </Button>
                    </div>
                </div>
                <p className="text-sm text-muted-foreground">
                    - New product features
                    <br />- Marketing campaign ideas
                    <br />- Improve user experience
                </p>
            </div>
        </div>
    )
}

function FilePenIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
            <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
        </svg>
    )
}


function TrashIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M3 6h18" />
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
        </svg>
    )
}
