const formatNumber = number => {
    if (number < 10) {
        return '0' + number;
    };

    return number;
};

const formatDate = date => {
    const newDate = new Date(date);

    return `${newDate.getFullYear()}-${formatNumber(newDate.getMonth() + 1)}-${formatNumber(newDate.getDate())
        }` + `T${newDate.getHours()}:${newDate.getMinutes()
        }`;
};

const myModal = `
    <div class="close">
        <a id="close"> X </a>
    </div>

    <div id="gif">
        <img src="img/loading-buffering.gif" id="loadingModal" alt="Loading Gif" />
    </div>
`;