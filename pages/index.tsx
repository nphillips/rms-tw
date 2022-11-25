import type { NextPage } from 'next'
import Head from 'next/head'
import IconCaretDown16 from "../img/IconCaretDown16"

const Home: NextPage = () => {
  return (
    <div className="w-screen text-dark-on-surface-light bg-dark-surface-dark h-screen grid grid-cols-[52px_auto] grid-rows-[52px_auto_28px] overflow-hidden">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='bg-dark-surface-default row-span-3' />
      <div className='bg-dark-surface-default' />
      <div className="flex overflow-hidden">
        <div className='flex flex-col flex-auto overflow-y-scroll overflow-x-hidden px-6 pb-36 text-dark-line-dark hover:text-dark-on-surface-dimmer transition duration-300 ease-in-out scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-curr scrollbar-track-dark-surface-default'>
          <div className='flex mt-6 mb-5 items-center w-full ml-auto mr-auto gap-x-4 text-dark-on-surface-light'>
            <div className="flex gap-x-2">
              <button className="border-0 text-sm leading-5 items-center appearance-none bg-transparent rounded text-red-700 inline-flex cursor-pointer justify-center">
                <div className="text-base font-semibold text-dark-on-surface-lightest">
                  Equity
                </div>
                <div className="text-dark-on-surface-dim pl-2">
                  <IconCaretDown16 className="fill-curr" />
                </div>
              </button>
            </div>
            <div className="flex overflow-hidden gap-x-2 border-1 items-center">
              <div className="text-sm text-dark-on-surface-dim">Show</div>
              <div className="items-center flex gap-x-1 overflow-y-hidden overflow-x-scroll text-dark-line-dark hover:text-dark-on-surface-dimmer scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-curr">
                <button className="text-sm text-on-surface-highlight bg-dark-surface-darkest whitespace-nowrap pointer-events-none hover:bg-[#2E3744] transition duration-300 ease-in-out h-8 leading-5 cursor-pointer no-underline inline-flex whitespace-no-wrap items-center pl-3 pr-3 rounded"> 7 days </button>
                <button className="text-sm text-on-surface-highlight bg-dark-surface-default whitespace-nowrap hover:bg-[#2E3744] transition duration-300 ease-in-out h-8 leading-5 cursor-pointer no-underline inline-flex whitespace-no-wrap items-center pl-3 pr-3 rounded"> MTD </button>
                <button className="text-sm text-on-surface-highlight bg-dark-surface-default whitespace-nowrap hover:bg-[#2E3744] transition duration-300 ease-in-out h-8 leading-5 cursor-pointer no-underline inline-flex whitespace-no-wrap items-center pl-3 pr-3 rounded"> Pre month </button>
                <button className="text-sm text-on-surface-highlight bg-dark-surface-default whitespace-nowrap hover:bg-[#2E3744] transition duration-300 ease-in-out h-8 leading-5 cursor-pointer no-underline inline-flex whitespace-no-wrap items-center pl-3 pr-3 rounded"> YTD </button>
                <button className="text-sm text-on-surface-highlight bg-dark-surface-default whitespace-nowrap hover:bg-[#2E3744] transition duration-300 ease-in-out h-8 leading-5 cursor-pointer no-underline inline-flex whitespace-no-wrap items-center pl-3 pr-3 rounded"> 1m </button>
                <button className="text-sm text-on-surface-highlight bg-dark-surface-default whitespace-nowrap hover:bg-[#2E3744] transition duration-300 ease-in-out h-8 leading-5 cursor-pointer no-underline inline-flex whitespace-no-wrap items-center pl-3 pr-3 rounded"> 3m </button>
                <button className="text-sm text-on-surface-highlight bg-dark-surface-default whitespace-nowrap hover:bg-[#2E3744] transition duration-300 ease-in-out h-8 leading-5 cursor-pointer no-underline inline-flex whitespace-no-wrap items-center pl-3 pr-3 rounded"> 6m </button>
              </div>
            </div>
            <div className="flex overflow-hidden gap-x-2 border-1 items-center flex-shrink-0">
              <div className="text-sm text-dark-on-surface-dim">Frequency</div>
              <div className="items-center flex gap-x-1">
                <button className="text-sm border-2 border-solid border-dark-on-surface-dim text-on-surface-highlight bg-dark-surface-darkest whitespace-nowrap pointer-events-none hover:bg-[#2E3744] transition duration-300 ease-in-out h-8 leading-5 cursor-pointer no-underline inline-flex whitespace-no-wrap items-center pl-3 pr-3 rounded">
                  <div>
                  Daily
                  </div>
                  <div className="ml-2">
                    <IconCaretDown16 className="fill-curr" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col overflow-y-scroll grow-0 shrink-0 basis-[436px]">
        </div>
      </div>
      <div className='bg-dark-surface-default' />
    </div>
  )
}

export default Home
