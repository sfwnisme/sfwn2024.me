import { useEffect, useState } from 'react'
import { BiStar } from 'react-icons/bi'
import { GoRepo } from 'react-icons/go';
import Link from './Link';
type Props = {
  repo: string,
}

type TRepo = {
  name: string;
  html_url: string;
  description: string;
  language: string;
  stargazers_count: number,
  homepage: string,
  license: {
    url: string,
    name: string,
  },
  created_at: string,
  updated_at: string,
}

const API_URLS = {
  repo: (repo: string) => `https://api.github.com/repos/sfwnisme/${repo}`,
}
export default function Repo({ repo = 'visi' }: Props) {
  const [data, setData] = useState<TRepo | null>(null)
  const updated_at = new Date(data?.updated_at ?? '')
  useEffect(() => {
    (
      async function () {
        const fetched = await fetch(API_URLS.repo(repo), {
          headers: {
            "Authorization": "token " + import.meta.env.VITE_GITHUB_TOKEN 
          }
        })
        const data = await fetched.json()
        setData(data)
      }
    )()
  }, [])

  return (
    <div className='border border-gray-600 p-5 font-mono'>
      <div className='HEADER mb-2 flex flex-wrap items-center gap-1 font-mono'>
        <p className="REPO_NAME flex items-center gap-1 flex-1">
          <GoRepo className='text-gray-400' />
          <Link href={data?.html_url ?? ''} className=' text-blue-500 font-medium font-mono'>{data?.name}</Link>
        </p>
        {
          data?.license &&
          <a href={data?.license?.url} className="LICENSE text-red-700 text-sm font-mono border border-red-400 px-1">{data?.license?.name}</a>
        }
      </div>
      <div className='CONTENT mb-2 text-gray-400'>
        <p className="DESCRIPTION sm:text-xs text-sm font-mono mb-2">{data?.description}</p>
        <p className="LANGUAGE_AND_STARS flex items-center ga-3 text-sm font-mono">
          <p className="LANGUAGE flex items-center gap-1 text-sm font-mono flex-1">
            <span className='block size-3 bg-blue-500'></span>
            {data?.language ?? ''}
          </p>
          {data?.stargazers_count !== 0 && <p className="STARS flex items-center gap-1 text-sm font-mono"><BiStar />{data?.stargazers_count}</p>}
        </p>
      </div>
      <div className="FOOTER text-gray-400 flex items-center gap-3">
        <p className="UPDATED_AT text-xs flex items-center gap-1 font-mono flex-1">
          <p className='font-medium font-mono'>last commit:</p>
          {updated_at?.toDateString() ?? new Date().toDateString()}
          {/* <p className="LAST_COMMIT text-sm font-mono">last commit: {lastCommit}</p> */}
        </p>
        {data?.homepage && <Link href={data?.homepage} className='font-mono text-blue-500 text-sm flex items-center'>visit</Link>}
      </div>
    </div>
  )
}
