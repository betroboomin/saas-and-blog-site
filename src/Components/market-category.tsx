import { Button, Flex } from "@chakra-ui/react"

export const MarketCategory = () => {



    return (
      <Flex gap="1rem" overflowX="auto">
        {categoryArray.map((item) => (
          <Button bgColor="pink.700" color="white">
            {item.name}
          </Button>
        ))}
      </Flex>
    );
}

export const categoryArray = [
    {
        name: 'Trending',
        link:"",
        image:"mall-interior.jpg"

    },
    {
        name: 'phones',
        link:"",
        image:"mallchrismass.jpg"

    },
    {
        name: 'Clothes',
        link:"",
        image:"spotlight.jpg"

    },
    {
        name: 'Cars',
        link:"",
        image:"yellow-rose.jpg"

    },
    {
        name: 'Laptops',
        link:"",

    },
    {
        name: 'Shoes',
        link:"",

    },
    {
        name: 'House',
        link:"",

    },
]