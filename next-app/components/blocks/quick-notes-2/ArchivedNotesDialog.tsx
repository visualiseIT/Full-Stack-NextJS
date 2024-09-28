import React from 'react';
import { useQuery, useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface ArchivedNotesDialogProps {
    open: boolean;
    onClose: () => void;
}

function ArchivedNotesDialog({ open, onClose }: ArchivedNotesDialogProps) {
    const archivedNotes = useQuery(api.notes.getArchivedNotes);
    const unarchiveNote = useMutation(api.notes.archiveNote);

    const handleUnarchive = (noteId: Id<"notes">) => {
        unarchiveNote({ noteId, archived: false });
    };

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Archived Notes</DialogTitle>
                </DialogHeader>
                <div className="mt-4">
                    {archivedNotes?.map((note) => (
                        <div key={note._id} className="mb-4 p-4 bg-gray-100 rounded-lg">
                            <h3 className="text-lg font-medium">{note.title}</h3>
                            <p className="mt-2">{note.text}</p>
                            <Button
                                className="mt-2"
                                onClick={() => handleUnarchive(note._id)}
                            >
                                Unarchive
                            </Button>
                        </div>
                    ))}
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default ArchivedNotesDialog;
