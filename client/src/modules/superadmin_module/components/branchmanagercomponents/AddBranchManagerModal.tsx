import { Camera, Plus } from "lucide-react";
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
} from "../../../../shared/ui/alert-dialog";
import { Button } from "../../../../shared/ui/button";
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "../../../../shared/ui/field";
import { Input } from "../../../../shared/ui/input";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../shared/ui/avatar";

export default function AddBranchManagerModal() {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button>
          <Plus /> Branch Manager
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <form action="" className="overflow-y-scroll h-160">
          <AlertDialogHeader>
            <AlertDialogTitle>Add Branch manager</AlertDialogTitle>
            <AlertDialogDescription className=" text-priamry w-full">
              <div className="my-5 flex flex-col items-center justify-center gap-2">
                <div className="relative group cursor-pointer">
                  <Avatar className="size-24 border-2 border-dashed border-muted-foreground/50 transition-all group-hover:opacity-80">
                    <AvatarImage
                      src={"https://github.com/shadcn.png"}
                      alt="User"
                    />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>

                  {/* Overlay icon on hover */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <Camera className="text-white size-6" />
                  </div>
                </div>

                {/* Hidden File Input */}
                <input type="file" className="hidden" accept="image/*" />
                <p className="text-xs text-muted-foreground">
                  Click to upload photo
                </p>
              </div>
              {/* ------------------------------ */}

              <div className="grid gap-4">
                <Field>
                  <FieldLabel htmlFor="Firstname">Firstname</FieldLabel>
                  <Input required id="Firstname" placeholder="eg.. Joaquin" />
                </Field>
                {/* ... other fields ... */}
              </div>
              <Field>
                <FieldLabel htmlFor="Firstname">Firstname</FieldLabel>
                <Input required id="Firstname" placeholder="eg.. Joaquin" />
                <FieldDescription className="text-destructive text-sm"></FieldDescription>
              </Field>
              <Field>
                <FieldLabel htmlFor="Middlename">Middlename</FieldLabel>
                <Input required id="Middlename" placeholder="eg.. Teo" />
                <FieldDescription className="text-destructive text-sm"></FieldDescription>
              </Field>
              <Field>
                <FieldLabel htmlFor="Lastname">Lastname</FieldLabel>
                <Input required id="Lastname" placeholder="eg.. Jara" />
                <FieldDescription className="text-destructive text-sm"></FieldDescription>
              </Field>
              <Field>
                <FieldLabel htmlFor="Email">Email</FieldLabel>
                <Input
                  id="Email"
                  type="email"
                  required
                  placeholder="eg.. Jara@gmail.com"
                />
                <FieldDescription className="text-destructive text-sm"></FieldDescription>
              </Field>
              <Field>
                <FieldLabel htmlFor="Contact">Contact</FieldLabel>
                <Input required id="Firstname" placeholder="eg.. Jara" />
                <FieldDescription className="text-destructive text-sm"></FieldDescription>
              </Field>
              <Field>
                <FieldLabel htmlFor="Address">Address</FieldLabel>
                <Input
                  required
                  id="Address"
                  placeholder="eg.. Juan Luna st. Davao City"
                />
                <FieldDescription className="text-destructive text-sm"></FieldDescription>
              </Field>
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel variant={undefined} size={undefined}>
              Cancel
            </AlertDialogCancel>
            <Button type="submit">Submit</Button>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
}
