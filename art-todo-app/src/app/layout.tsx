import ChakraWrapper from './component/chakrawrapper/chakra';
import { GlobalContextProvider } from './context/store';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <GlobalContextProvider>
          <ChakraWrapper>
            {children}
          </ChakraWrapper>
        </GlobalContextProvider>
      </body>
    </html>
  )
}
