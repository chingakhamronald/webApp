import { FC, memo } from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Control, FieldValues, Path } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface ICustomFormField<T extends FieldValues> {
  formControl: Control<T>;
  label: string;
  type?: string;
  value: Path<T>;
  placeholder?: string;
}

export const CustomFormField: FC<ICustomFormField<any>> = memo(
  ({ formControl, label, value, type = "string", placeholder }) => {
    return (
      <FormField
        control={formControl}
        name={value}
        render={({ field }) => (
          <FormItem className="py-2 w-full">
            <FormLabel>{label}</FormLabel>
            {type === "select" ? (
              <Select>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            ) : (
              <FormControl>
                <Input placeholder={placeholder} {...field} type={type} />
              </FormControl>
            )}
            <FormMessage />
          </FormItem>
        )}
      />
    );
  }
);
