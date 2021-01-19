module Api        
    module V1
        class Api::V1::MedicController < ApplicationController
            def create
                @medic = Medic.new(medic_params)

                if @medic.save
                    render json: {status: 'SUCCESS', data: @medic}, status: :ok
                else
                    render json: {status: 'ERROR', data: @medic.errors}, status: :unprocessable_entity
                end
            end

            def show
                @medic = Medic.find(params[:id])

                @message = ''
                if @medic['expiration_date'] < Date.today 
                    @message = 'This medical recommendation is expired'
                end

                render json: {status: 'SUCCESS', message: @message, data: @medic}, status: :ok
            end

            def update
                @medic = Medic.find(params[:id])
                if @medic.update_attributes(medic_params)
                    render json: {status: 'SUCCESS', data: @medic}, status: :ok
                else
                    render json: {status: 'ERROR', data: @medic.errors}, status: :unprocessable_entity
                end
            end

            def destroy
                @medic = Medic.find(params[:id])
                if @medic.destroy
                    render json: {status: 'SUCCESS', data: @medic}, status: :ok
                else
                    render json: {status: 'ERROR', data: @medic.errors}, status: :unprocessable_entity
                end
            end

            private

            def medic_params
                params.require(:medic).permit(:recommend_num, :issuer, :state, :expiration_date, :path_to_image, :user_id)
            end
        end
    end
end