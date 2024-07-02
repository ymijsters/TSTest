import { type FormEvent, type ComponentPropsWithoutRef, useRef, useImperativeHandle, forwardRef } from "react"

type FormProps = ComponentPropsWithoutRef<'form'> & {
    onSave: (value: unknown) => void;
}

export type FormHandle = {
    clear: () => void;
}

const Form = forwardRef<FormHandle, FormProps>(function Form
    (
        { onSave, children, ...props }: FormProps,
        ref
    ) {
    const form = useRef<HTMLFormElement>(null);

    useImperativeHandle(ref,() => {
        return {
            clear() {
                form.current?.reset();
            }
        }
    });

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget)
        const data = Object.fromEntries(formData);
        onSave(data);
    }

    return (
        <form onSubmit={handleSubmit} {...props} ref={form}>
            {children}
        </form>
    )
});

export default Form;