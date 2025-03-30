import { Save, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Ring } from "@/types/ring";
import useRingForm from "./use-ring-form";
import DotsLoader from "../dots-loader";

interface Props {
  ring?: Ring;
}

export default function RingForm({ ring }: Props) {
  const { form, onSubmit, isPending } = useRingForm({ ring });

  return (
    <Card className="w-full max-w-2xl mx-auto bg-gradient-to-b from-lotr-parchment to-white border-lotr-gold/30 ring-card-shadow">
      <CardHeader className="border-b border-lotr-gold/20 bg-ring-inscription py-4">
        <CardTitle className="text-2xl text-center font-display text-lotr-shadow">
          {ring ? "Edit Ring" : "Forge a New Ring"}
        </CardTitle>
      </CardHeader>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="p-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 md:items-start gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-display text-lotr-darkgold">
                      Ring Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="border-lotr-darkgold/30 focus:border-lotr-gold focus:ring-lotr-gold/20"
                        placeholder="e.g. Narya, The Ring of Fire"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="power"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-display text-lotr-darkgold">
                      Ring Power
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="border-lotr-darkgold/30 focus:border-lotr-gold focus:ring-lotr-gold/20"
                        placeholder="e.g. Control over fire"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="carrier"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-display text-lotr-darkgold">
                      Ring Carrier
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="border-lotr-darkgold/30 focus:border-lotr-gold focus:ring-lotr-gold/20"
                        placeholder="e.g. Gandalf the Grey"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="forgedBy"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-display text-lotr-darkgold">
                      Forged By
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full border-lotr-darkgold/30 focus:border-lotr-gold focus:ring-lotr-gold/20">
                          <SelectValue placeholder="e.g. Elves" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="men">Men</SelectItem>
                        <SelectItem value="dwarves">Dwarves</SelectItem>
                        <SelectItem value="elves">Elves</SelectItem>
                        <SelectItem value="sauron">Sauron</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="imageUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-display text-lotr-darkgold">
                    Ring Image URL
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="border-lotr-darkgold/30 focus:border-lotr-gold focus:ring-lotr-gold/20"
                      placeholder="https://example.com/ring-image.jpg"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>

          <CardFooter className="px-6 pb-6 pt-0 flex flex-wrap justify-end gap-4">
            <Button
              type="submit"
              className="w-32 bg-lotr-gold hover:bg-lotr-darkgold text-white button-hover-effect"
            >
              <div className="flex items-center gap-2">
                {isPending ? (
                  <DotsLoader className="!size-6" />
                ) : ring ? (
                  <>
                    <Save className="w-4 h-4 mr-2" />
                    Save Changes
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 mr-2" />
                    Forge Ring
                  </>
                )}
              </div>
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
