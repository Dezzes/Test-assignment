import { Box } from "@mui/material";

interface Props<T> {
    items: T[],
    renderItem: (item: T) => React.ReactNode,
}

function ItemList<T>(props: Props<T>) {
    return (
        <Box sx={{ mt: "20px" }}>
            {props.items.map(props.renderItem)}
        </Box>
    );
};

export default ItemList