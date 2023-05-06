import InfiniteScrollLibrary from 'react-infinite-scroll-component'
import ClipLoader from 'react-spinners/ClipLoader'
import Link from 'next/link'
import React from 'react'

type Props = {
  children: React.ReactNode
  infiniteScrollSettings: {
    style?: {}
    dataLength: number
    onHandleNext: () => void
    hasMore: boolean
    loading: boolean
    endMessageDisplay: string
    endMessageLink: string
    endMessageLinkDetails: string
  }
}

export function InfiniteScroll({ children, infiniteScrollSettings }: Props) {
  return (
    <InfiniteScrollLibrary
      className="text-black"
      dataLength={infiniteScrollSettings.dataLength}
      endMessage={
        <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '20px' }}>
          <b>
            {infiniteScrollSettings.endMessageDisplay}{' '}
            <Link href={infiniteScrollSettings.endMessageLink}>
              <span className="text-black">
                {infiniteScrollSettings.endMessageLinkDetails}
              </span>
            </Link>
          </b>
        </p>
      }
      hasMore={infiniteScrollSettings.hasMore}
      loader={
        infiniteScrollSettings.loading && (
          <div className="flex justify-center mt-4">
            <ClipLoader className="spinner" color="#d53f8c" />
          </div>
        )
      }
      next={infiniteScrollSettings.onHandleNext}
      style={infiniteScrollSettings.style}
    >
      {children}
    </InfiniteScrollLibrary>
  )
}
