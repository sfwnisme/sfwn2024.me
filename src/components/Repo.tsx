import { useEffect, useState } from "react";
import { BiStar } from "react-icons/bi";
import { GoRepo } from "react-icons/go";
import Link from "./Link";
type Props = {
  repo: string;
};

type TRepo = {
  name: string;
  html_url: string;
  description: string;
  language: string;
  stargazers_count: number;
  homepage: string;
  license: {
    url: string;
    name: string;
  };
  created_at: string;
  updated_at: string;
};

const API_URLS = {
  repo: (repo: string) => `https://api.github.com/repos/sfwnisme/${repo}`,
};
export default function Repo({ repo = "visi" }: Props) {
  const [data, setData] = useState<TRepo | null>(null);
  const updated_at = new Date(data?.updated_at ?? "");
  useEffect(() => {
    (async function () {
      const fetched = await fetch(API_URLS.repo(repo), {
        headers: {
          Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
        },
      });
      const data = await fetched.json();
      setData(data);
    })();
  });

  return (
    <div className="p-5 font-mono border border-gray-600">
      <div className="flex flex-wrap gap-1 items-center mb-2 font-mono HEADER">
        <p className="flex flex-1 gap-1 items-center REPO_NAME">
          <GoRepo className="text-gray-400" />
          <Link
            href={data?.html_url ?? ""}
            className="font-mono font-medium text-blue-500"
            icon="invisible"
            // underline="visible"
          >
            {data?.name}
          </Link>
        </p>
        {/*data?.license && (
            <a
              href={data?.license?.url}
              className="px-1 font-mono text-sm text-red-700 border border-red-400 LICENSE"
            >
              {data?.license?.name}
            </a>
          )*/}
      </div>
      <div className="mb-2 text-gray-400 CONTENT">
        <p className="mb-2 font-mono text-xs DESCRIPTION">
          {data?.description}
        </p>
        <p className="flex items-center font-mono text-sm LANGUAGE_AND_STARS ga-3">
          <p className="flex flex-1 gap-1 items-center font-mono text-xs LANGUAGE">
            <span className="block bg-blue-500 size-3" />
            {data?.language ?? ""}
          </p>
          {data?.stargazers_count !== 0 && (
            <p className="flex gap-1 items-center font-mono text-sm STARS">
              <BiStar />
              {data?.stargazers_count}
            </p>
          )}
        </p>
      </div>
      <div className="flex gap-3 items-center text-gray-400 FOOTER">
        <p className="flex flex-1 gap-1 items-center font-mono text-xs UPDATED_AT">
          <p className="font-mono font-medium">last commit:</p>
          {updated_at?.toDateString() ?? new Date().toDateString()}
          {/* <p className="font-mono text-sm LAST_COMMIT">last commit: {lastCommit}</p> */}
        </p>
        {data?.homepage && (
          <Link
            href={data?.homepage}
            className="flex items-center font-mono text-sm text-blue-500"
          >
            Live Demo
          </Link>
        )}
      </div>
    </div>
  );
}
