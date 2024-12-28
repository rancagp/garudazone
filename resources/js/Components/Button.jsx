import { cva } from "class-variance-authority"

const Button = ({variant, className, children}) => {
  const buttonVariant= cva('inline-flex items-center rounded-md border px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out',{
    variants:{
      variant:{
        primary:'border-transparent bg-blue-500  hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:bg-gray-900',
        secondary:'border-gray-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-700 shadow-sm transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25',
        danger:'border-transparent bg-red-500  hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2 active:bg-red-700'

      }
    },
    defaultVariants:{
      variant:'primary'
    }
  })
  return (
    <button className={buttonVariant({variant}) + ' ' + className}>{children}</button>
  )
}

export default Button