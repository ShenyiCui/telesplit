import React, { useState } from "react";
import {
  Bars3CenterLeftIcon,
  BarsArrowUpIcon,
  UsersIcon,
} from "@heroicons/react/16/solid";

const tabs = [{ name: "FRIENDS" }, { name: "GROUPS" }, { name: "ACTIVITY" }];
const friends = [
  {
    id: "friends-1",
    name: "Zong Xun",
    amount: 15,
  },
  {
    id: "friends-2",
    name: "Santosh Muthukrishnan",
    amount: 200,
  },
  {
    id: "friends-3",
    name: "Winston Lim",
    amount: -25,
  },
  {
    id: "friends-4",
    name: "Samuel Tan",
    amount: 100,
  },
  {
    id: "friends-5",
    name: "Shawn Lim",
    amount: -50,
  },
  {
    id: "friends-6",
    name: "James Lim",
    amount: 50,
  },
  {
    id: "friends-7",
    name: "Daniel Lim",
    amount: 0,
  },
  {
    id: "friends-8",
    name: "John Lim",
    amount: 0,
  },
  {
    id: "friends-9",
    name: "Jane Lim",
    amount: 0,
  },
  {
    id: "friends-10",
    name: "Jenny Lim",
    amount: 0,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Home = () => {
  const [currentTab, setCurrentTab] = useState("FRIENDS");

  const handleTabChange = (tabName: string) => {
    setCurrentTab(tabName);
  };

  return (
    <div className="h-screen flex flex-col justify-between bg-greenBg">
      <div>
        <div className="flex items-center justify-center py-4">
          <h1 className="text-white text-xl	font-light">TELESPLIT</h1>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col items-center gap-2">
            <div className="flex justify-center items-center h-16 w-16 rounded-full bg-white">
              <span className="text-[#4CBB9B] text-3xl">SC</span>
            </div>
            <span className="text-white text-xs">Shenyi Cui</span>
          </div>

          <div className="flex mx-5 py-2 bg-white rounded-md mt-4">
            <div className="w-full border-r-2 flex justify-center">
              <div>
                <dt className="truncate text-sm font-medium text-gray-500">
                  You Owe
                </dt>
                <dd className="mt-1 text-2xl font-semibold tracking-tight text-gray-900">
                  $1,000.00
                </dd>
              </div>
            </div>

            <div className="w-full flex justify-center">
              <div>
                <dt className="truncate text-sm font-medium text-gray-500">
                  You Are Owed
                </dt>
                <dd className="mt-1 text-2xl font-semibold tracking-tight text-gray-900">
                  $1,000.00
                </dd>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-full mt-5 w-full bg-white rounded-t-3xl px-4 flex flex-col gap-4 overflow-y-hidden">
        <nav className="-mb-px flex justify-evenly" aria-label="Tabs">
          {tabs.map((tab) => (
            <a
              key={tab.name}
              onClick={() => handleTabChange(tab.name)}
              className={classNames(
                tab.name === currentTab
                  ? "border-greenBg text-greenBg"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                "whitespace-nowrap border-b-2 pt-4 pb-1 px-1 text-sm font-medium cursor-pointer"
              )}
              aria-current={tab.name === currentTab ? "page" : undefined}
            >
              {tab.name}
            </a>
          ))}
        </nav>

        <div className="w-full bg-white">
          <div className="flex rounded-md shadow-sm">
            <div className="relative flex flex-grow items-stretch focus-within:z-10">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <UsersIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <input
                type="text"
                className="block w-full rounded-none rounded-l-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="John Smith"
              />
            </div>
            <button
              type="button"
              className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              <BarsArrowUpIcon
                className="-ml-0.5 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              Sort
            </button>
          </div>
        </div>

        <div className="flex flex-col h-full gap-4 overflow-y-auto pb-4">
          {friends.map((friend) => {
            const isSettledUp = friend.amount === 0;
            const isOwed = friend.amount > 0;
            const bgColor = isSettledUp
              ? "bg-gray-500"
              : isOwed
              ? "bg-greenBg"
              : "bg-redBg";
            const money = isSettledUp
              ? "All settled up"
              : isOwed
              ? `You are owed $${friend.amount}`
              : `You owe $${-friend.amount}`;

            return (
              <li
                key={friend.id}
                className="col-span-1 flex rounded-md shadow-sm"
              >
                <div
                  className={classNames(
                    "flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white",
                    bgColor
                  )}
                >
                  {friend.name
                    .split(" ")
                    .map((name) => name[0])
                    .join("")}
                </div>
                <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
                  <div className="flex-1 truncate px-4 py-2 text-sm">
                    <a className="font-medium text-gray-900 hover:text-gray-600">
                      {friend.name}
                    </a>
                    <p className="text-gray-500">{money}</p>
                  </div>
                  <div className="flex-shrink-0 pr-2">
                    <button
                      type="button"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      <span className="sr-only">Open options</span>
                      <Bars3CenterLeftIcon
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
