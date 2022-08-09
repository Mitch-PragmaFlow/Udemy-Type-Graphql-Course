import express from 'express';

const main = async () => {
    const app = express();
    const PORT = process.env.PORT || 500;

    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    });
};

main().catch((err) => {
    console.error(err);
});