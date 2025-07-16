import { BuildingOffice2Icon, ChevronDownIcon } from '@heroicons/react/16/solid'
import { validExperienceTypes } from '../utils/constants'

export default function SearchBar() {
  return (
    <div>
      <label htmlFor="price" className="block text-lg font-medium text-gray-900">
        Search Experiences
      </label>
      <div className="mt-2">
        <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
            <BuildingOffice2Icon className="mr-1.5 size-5 shrink-0 text-gray-400" />
          <input
            id="search"
            name="search"
            type="text"
            placeholder="Search by company, college name"
            className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
          />
          <div className="grid shrink-0 grid-cols-1 focus-within:relative">
            <select
              id="currency"
              name="currency"
              aria-label="Currency"
              className="col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pr-7 pl-3 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            >
                {
                    validExperienceTypes.map(type => <option key={type} >{type}</option>)
                }
            </select>
            <ChevronDownIcon
              aria-hidden="true"
              className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
