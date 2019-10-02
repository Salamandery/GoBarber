import Sequelize, { Model } from 'sequelize';

class Events extends Model {
    static init(sequelize) {
        super.init(
            {
                successed_at: Sequelize.DATE,
                canceled_at: Sequelize.DATE,
                date: Sequelize.DATE,
            },
            {
                sequelize,
            }
        );

        return this;
    }

    static associate(models) {
        this.belongsTo(models.File, { foreignKey: 'banner_id', as: 'banner' });
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
        this.belongsTo(models.User, {
            foreignKey: 'provider_id',
            as: 'provider',
        });
    }
}

export default Events;
