import { create } from 'zustand'
import { Highlight } from 'prism-react-renderer'
import CopyButton from './CopyButton'
import SnippetLang from './SnippetLang'
import javascriptCode from '../resources/javascript-code'
import typescriptCode from '../resources/typescript-code'
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

const useStore = create((set, get) => ({
  lang: 'javascript',
  setLang: (lang) => set(() => ({ lang })),
  getCode: () => (get().lang === 'javascript' ? javascriptCode : typescriptCode),
}))

export default function CodePreview() {
  const { lang, setLang, getCode } = useStore()
  const code = getCode()

  return (
    <>
    {/* <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Enter your details to register.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" label="Name" />
          <Input size="lg" label="Email" />
          <Input type="password" size="lg" label="Password" />
        </div>
        <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree the
              <a
                href="#"
                className="font-medium transition-colors hover:text-gray-900"
              >
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Button className="mt-6" fullWidth>
          Register
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <a href="#" className="font-medium text-gray-900">
            Sign In
          </a>
        </Typography>
      </form>
    </Card> */}
    </>
    
    // <Highlight code={code} language="tsx" theme={undefined}>
    //   {({ className, style, tokens, getLineProps, getTokenProps }) => (
    //     // define how each line is to be rendered in the code block,
    //     // position is set to relative so the copy button can align to bottom right
    //     <pre className={className} style={{ ...style, position: 'relative' }}>
    //       {tokens.map((line, i) => (
    //         <div {...getLineProps({ line, key: i })}>
    //           {line.map((token, key) => (
    //             <span {...getTokenProps({ token, key })} />
    //           ))}
    //         </div>
    //       ))}
    //       {/* <div className="snippet-container">
    //         <SnippetLang lang={lang} setLang={setLang} />
    //         <CopyButton code={code} />
    //       </div> */}
    //     </pre>
    //   )}
    // </Highlight>
  )
}
