import React, { useCallback, useEffect, useRef, useState } from 'react'

import UserCard from '../userCard/UserCard'
import { findAllUsers, findUsersBySearchTerm } from '../../api/userApi';

import { SearchInput, SearchButton, SearchContainer, UsersGrid } from "./UserDirectory.styles"

export default function UserDirectory() {

  const [users, setUsers] = useState();
  const [searchedUsers, setSearchedUsers] = useState([]);
  const [search, setSearch] = useState('');

  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchMode, setSearchMode] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);


  const observer = useRef()

  const lastElementRef = useCallback(node => {
    if (loading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setCurrentPage(prevCurrentPage => prevCurrentPage + 1)
      }
    })
    if (node) observer.current.observe(node)
  }, [loading, hasMore])

  // useEffect(() => {
  //   const fetchRandomUser = async () => {
  //     try {
  //       let result = await findAllUsers();
  //       console.log("getUserByRandom:", result);
  //       if (result) {
  //         setUsers(result);
  //       }
  //     } catch (error) {
  //       console.log("fetch error: ", error);
  //     }
  //   }

  //   if (search.length === 0) {
  //     setSearchMode(false)
  //     fetchRandomUser()
  //   }
  // }, [search])

  useEffect(() => {
    if (currentPage === undefined) return;
    setLoading(true);
    getSearchData();

  }, [currentPage])



  const handleSearch = () => {
    // setSearchMode(true);
    setSearchedUsers([]);
    setCurrentPage(0);

    if (currentPage === 0) {
      getSearchData();
    }
  }

  const getSearchData = async () => {
    try {
      let result = null;
      if (search && search.length > 0) {
        result = await findUsersBySearchTerm(search, currentPage, itemsPerPage);
        console.log("findUsersBySearchTerm:", result);
      } else {
        result = await findAllUsers(currentPage, itemsPerPage);
        console.log("findAllUsers:", result);
      }

      if (result) {
        // setSearchedUsers(result.content);
        setSearchedUsers(prevSearchedUsers => {
          return [...new Set([...prevSearchedUsers, ...result.content])]
        })

        setHasMore(!result.last);
      }
    } catch (error) {
      console.log("fetch error: ", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <SearchButton onClick={handleSearch}>Search</SearchButton>
      </SearchContainer>

      {/* {searchMode && */}
      <UsersGrid>
        {searchedUsers.map((user, index) => {
          if (searchedUsers.length === index + 1) {
            return <UserCard ref={lastElementRef} key={user.userId} user={user} />
          } else {
            return <UserCard key={user.userId} user={user} />
          }
        })}
        <div>{loading && 'Loading...'}</div>
      </UsersGrid>
      {/* } */}

      {/* {!searchMode &&
        (<UsersGrid>
          {users && users.map((user) => (<UserCard key={user.userId} user={user} />))}
        </UsersGrid>)
      } */}
    </>
  )
}