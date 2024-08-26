import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { IoLogoWhatsapp } from "react-icons/io";



export function AlertDialogDemo() {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button>Hubungi Kami</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Pilih cabang kami</AlertDialogTitle>
                    <AlertDialogDescription>
                        <div className="flex flex-col gap-3">
                            <Button variant={"outline"} onClick={() => {
                                window.open('https://wa.me/+6287877679292', '_blank')
                            }}><div className="flex gap-3 items-center border"><IoLogoWhatsapp />KATO GREENLAKE</div></Button>
                            <Button variant={"outline"} onClick={() => {
                                window.open('https://wa.me/+628997220800', '_blank')
                            }}><div className="flex gap-3 items-center"><IoLogoWhatsapp />KATO GREEN VILLE</div></Button>
                            <Button variant={"outline"} onClick={() => {
                                window.open('https://wa.me/+6285923225111', '_blank')
                            }}><div className="flex gap-3 items-center"><IoLogoWhatsapp />KATO CITRA RAYA </div></Button>
                            <Button variant={"outline"} onClick={() => {
                                window.open('https://wa.me/+6285923227111', '_blank')
                            }}><div className="flex gap-3 items-center "><IoLogoWhatsapp />KATO CITRA 6</div></Button>
                        </div>

                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Kembali</AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
